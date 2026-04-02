import { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            {label}
            {props.required && <span className="text-danger ml-1">*</span>}
          </label>
        )}
        <input
          ref={ref}
          className={`w-full px-4 py-2.5 rounded-lg border ${
            error ? 'border-danger focus:border-danger' : 'border-gray-300 focus:border-brand'
          } focus:outline-none focus:ring-2 ${
            error ? 'focus:ring-danger/25' : 'focus:ring-brand-subtle'
          } transition-all duration-200 ${className}`}
          {...props}
        />
        {error && <p className="mt-1.5 text-sm text-danger-foreground">{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
