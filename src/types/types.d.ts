// types.d.ts

import React, { ReactNode } from "react";
import { ActionFunction } from "react-router-dom";

// Topics Interfaces
export interface NavTopic {
  navTopic: string;
}

export interface Topics {
  [key: string]: string;
}

export interface TopicCardProps {
  name: string;
  url: string;
}
export interface TopicProps {
  topic: string;
  length: number;
  index: number;
}

// Category Interfaces
export type BaseCategoryResults = BaseCharacterInterface[];
export interface SubClasses extends BaseCharacterInterface {};

// Character Interfaces
export interface BaseCharacterInterface extends TopicCardProps {
  index: string;
}

export interface MultiClassing {
  prerequisites: Prerequisites[];
  proficiencies: Proficiencies[];
  name: string;
}

export interface Prerequisites {
  abilityScore: AbilityScore;
  minimumScore: number;
}

export interface Proficiencies extends BaseCharacterInterface {}

export interface ProficiencyChoices {
  choose: number;
  description: string;
  from: ProficiencyOptions;
}

export interface ProficiencyOptions {
  from: Options[];
}

export interface Options {
  item: BaseCharacterInterface[];
}

export interface SavingThrows {
  savingThrows: BaseCharacterInterface[];
}

export interface StartingEquipment {
  equipment: BaseCharacterInterface[];
}

export interface StartingEquipmentOptions {
  choose: number;
  description: string;
  options: EquipmentOptions[];
}

export interface EquipmentOptions {
  count: number;
  of: EquipmentDescription;
}

export interface EquipmentDescription extends BaseCharacterInterface {}

export interface ClassCardProps extends BaseCharacterInterface {
  class_levels: string;
  hit_die: number;
  multiclassing: MultiClassing;
  proficiencies: Proficiencies[];
  proficiencyChoices: ProficiencyChoices[];
  savingThrows: SavingThrows[];
  startingEquipment: StartingEquipment[];
  startingEquipmentOptions: StartingEquipmentOptions[];
  subClasses: SubClasses[];
}

// Reducer interfaces / types

export interface CategoryProviderProps {
  categoryAPI: string;
  children: ReactNode;
}

export type CategoryState = {
  categories: BaseCategoryResults;
  categoryAPI: string;
  topics: Topics;
  loadingCategories: boolean;
  loadingTopics: boolean;
  error: string | null;
  fetchCategoryData?: (api: string) => Promise<void>;
}

export type CategoryAction =
  | { type: "SET_CATEGORY_API"; payload: string }
  | { type: "FETCH_CATEGORIES_REQUEST" }
  | { type: "FETCH_CATEGORIES_SUCCESS"; payload: BaseCategoryResults }
  | { type: "FETCH_CATEGORIES_FAILURE"; error: unknown }
  | { type: "FETCH_TOPICS_REQUEST" }
  | { type: "FETCH_TOPICS_SUCCESS"; payload: Topics }
  | { type: "FETCH_TOPICS_FAILURE"; error: unknown };