import { NagCardKeyOptions } from '@/types/nagCard';

export const cardXsmall = (
  categoryKey: number,
  text: string,
): NagCardKeyOptions => {
  return {
    categoryKey,
    typeKey: 1,
    sizeKey: 0,
    textStyleKey: 2,
    text,
  };
};

export const cardSmall = (
  categoryKey: number,
  text: string,
): NagCardKeyOptions => {
  return {
    categoryKey,
    typeKey: 1,
    sizeKey: 1,
    textStyleKey: 2,
    text,
  };
};

export const cardMedium = (
  categoryKey: number,
  text: string,
): NagCardKeyOptions => {
  return {
    categoryKey,
    typeKey: 1,
    sizeKey: 2,
    textStyleKey: 2,
    text,
  };
};

export const cardLargeNag = (
  categoryKey: number,
  text: string,
): NagCardKeyOptions => {
  return {
    categoryKey,
    typeKey: 1,
    sizeKey: 3,
    textStyleKey: 1,
    text,
  };
};

export const cardLargeComment = (
  categoryKey: number,
  text: string,
): NagCardKeyOptions => {
  return {
    categoryKey,
    typeKey: 2,
    sizeKey: 3,
    textStyleKey: 0,
    text,
  };
};
