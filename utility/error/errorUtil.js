export function undefinedFieldError(field, customMessage = null) {
  return new Error(customMessage || `${field} is undefined`);
}

export function rejectError(reject, error) {
  return reject(error);
}
