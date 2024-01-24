export const isDefined = (object: unknown): boolean => {
  return object !== null && object !== undefined;
};

export const areAllDefined = (
  objectList: Record<string, unknown>[],
): boolean => {
  return objectList.every((obj) => isDefined(obj));
};

export const isNotDefined = (object: unknown): object is null | undefined => {
  return !isDefined(object);
};
