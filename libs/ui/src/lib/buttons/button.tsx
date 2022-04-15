export enum ButtonSize {
  tiny = 'tiny',
  small = 'small',
  medium = 'medium',
  large = 'large',
}

export enum ButtonType {
  submit = 'submit',
  reset = 'reset',
  button = 'button',
}

export interface ButtonProps {
  size?: ButtonSize;
  label: string;
}

export function Button({
  size = ButtonSize.medium,
  children,
  type = ButtonType.button,
}: {
  size?: ButtonSize;
  children: React.ReactNode;
  type?: ButtonType;
}) {
  return (
    <div>
      <button
        type={type}
        className="inline-flex w-full justify-center py-2.5 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <span className="block">{children}</span>
      </button>
    </div>
  );
}
