export const cardCategoryMap: Map<
  number,
  'empty' | 'blue' | 'emerald' | 'green' | 'purple' | 'red' | 'yellow' | undefined
> = new Map([
  [0, 'empty'],
  [1, 'blue'],
  [2, 'emerald'],
  [3, 'green'],
  [4, 'purple'],
  [5, 'red'],
  [6, 'yellow'],
]);

export const cardTypesMap: Map<number, 'empty' | 'front' | 'back' | undefined> = new Map([
  [0, 'empty'],
  [1, 'front'],
  [2, 'back'],
]);

export const cardSizeMap: Map<number, 'medium' | 'large' | 'small' | 'xSmall' | undefined> = new Map([
  [0, 'xSmall'],
  [1, 'small'],
  [2, 'medium'],
  [3, 'large'],
]);

export const textStyleMap: Map<number | undefined, 'comment' | 'category' | 'nag' | undefined> = new Map([
  [0, 'comment'],
  [1, 'category'],
  [2, 'nag'],
]);
