import React from "react";

export interface NavTopic {
  navTopic: string;
};

export interface Topics {
  [key: string]: string;
};

export interface TopicProps {
  topic: string;
  length: number;
  index: number;
};

export interface TopicCardProps {
  name: string;
  url: string;
};

interface BaseCharacterInterface extends TopicCardProps{
  index: string;
};

interface MultiClassing {
  prerequisites: Prerequisites[];
  proficiencies: Proficiencies[];
  name: string;
};

interface Prerequisites {
  abilityScore: AbilityScore;
  minimumScore: number;
};

interface AbilityScores {
  count: string;
  results: BaseCharacterInterface[];
};

interface Proficiencies extends BaseCharacterInterface {
};

interface ProficiencyChoices {
  choose: number;
  description: string;
  from: ProficiencyOptions;
};

interface ProficiencyOptions {
  from: Options[];
};

interface Options {
  item: BaseCharacterInterface[];
};

interface SavingThrows { 
  savingThrows: BaseCharacterInterface[];
};

interface StartingEquipment {
  equipment: BaseCharacterInterface[]; 
}

interface StartingEquipmentOptions {
  choose: number;
  description: string;
  options: EquipmentOptions[];
}

interface EquipmentOptions {
  count: number;
  of: EquipmentDescription;
}

interface EquipmentDescription extends BaseCharacterInterface {
}

interface SubClasses extends BaseCharacterInterface {
}

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

type SetTopicProps<T> = {
  setTopic: React.Dispatch<React.SetStateAction<T>>
}
