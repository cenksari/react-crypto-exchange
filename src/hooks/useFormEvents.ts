const useFormEvents = () => {
  const filter = ['Tab', 'Enter', 'Backspace', 'ArrowLeft', 'ArrowRight'];

  /**
   * Handles the `keydown` event on an input field to only allow certain characters.
   *
   * @param {React.KeyboardEvent<HTMLInputElement>} e - The `React.KeyboardEvent<HTMLInputElement>` event object.
   */
  const onlyEmail = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    const { key } = e;

    if (!/[@a-zA-Z0-9._-]/.test(key) && filter.indexOf(key) === -1) e.preventDefault();
  };

  /**
   * Handles the `keydown` event on an input field to only allow numeric input.
   *
   * @param {React.KeyboardEvent<HTMLInputElement>} e - The `React.KeyboardEvent<HTMLInputElement>` event object.
   */
  const onlyNumbers = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    const { key } = e;

    if (!/[0-9]/.test(key) && filter.indexOf(key) === -1) e.preventDefault();
  };

  /**
   * Handles the `keydown` event on an input field to only allow certain characters.
   *
   * @param {React.KeyboardEvent<HTMLInputElement>} e - The `React.KeyboardEvent<HTMLInputElement>` event object.
   */
  const onlyAlphaNumeric = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    const { key } = e;

    if (!/[a-z0-9_]/.test(key) && filter.indexOf(key) === -1) e.preventDefault();
  };

  return { onlyEmail, onlyNumbers, onlyAlphaNumeric };
};

export default useFormEvents;
