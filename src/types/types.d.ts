import React from "react";

export interface NavTopic {
  navTopic: string;
}

export interface Topics {
  index: string;
  name: string;
  url: string;
}

export interface TopicProps {
  topic: string;
  length: number;
  index: number;
}

export interface TopicCardProps {
  name: string;
  url: string;
}

export interface ClassCardProps {
  class_levels: string;
  hit_die: number;
  // multi classing is an object
  name: string;
  //proficiencies is an array
  //proficiency_choices is an array
  // saving_throws is an array
  // starting_equipment is an array
  // starting_equipment_options is an array
  // subclasses is an array
}

type SetTopicProps<T> = {
  setTopic: React.Dispatch<React.SetStateAction<T>>
}