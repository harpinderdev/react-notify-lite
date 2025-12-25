# react-notify-lite

A lightweight and customizable React notification library with TypeScript support.

## Features

- Lightweight and fast
- TypeScript support
- Multiple notification types (success, error, warning, info)
- Customizable positioning (6 positions)
- Auto-dismiss with configurable duration
- Smooth animations
- Easy to use API
- Zero dependencies (except React)

## Installation

```bash
npm install react-notify-lite
```

or

```bash
yarn add react-notify-lite
```

## Usage

### 1. Wrap your app with ToastProvider

```tsx
import React from 'react';
import { ToastProvider } from 'react-notify-lite';
import 'react-notify-lite/dist/styles.css';

function App() {
  return (
    <ToastProvider>
      <YourApp />
    </ToastProvider>
  );
}

export default App;
```

### 2. Use the useNotify hook in your components

```tsx
import React from 'react';
import { useNotify } from 'react-notify-lite';

function MyComponent() {
  const notify = useNotify();

  const handleClick = () => {
    // Basic notification
    notify.info('This is an info message');

    // Success notification
    notify.success('Operation completed successfully!');

    // Error notification
    notify.error('Something went wrong!');

    // Warning notification
    notify.warning('This is a warning message');

    // Custom options
    notify.info('Custom notification', {
      duration: 5000,
      position: 'top-center',
    });
  };

  return (
    <button onClick={handleClick}>
      Show Notification
    </button>
  );
}
```

## API

### ToastProvider

Wrap your application with `ToastProvider` to enable notifications throughout your app.

```tsx
<ToastProvider>
  {children}
</ToastProvider>
```

### useNotify Hook

The `useNotify` hook returns an object with the following methods:

#### `notify(message, options?)`

Display a notification with custom options.

```tsx
notify.notify('Message', {
  type: 'info',
  duration: 3000,
  position: 'top-right',
});
```

#### `success(message, options?)`

Display a success notification.

```tsx
notify.success('Success message', {
  duration: 3000,
  position: 'top-right',
});
```

#### `error(message, options?)`

Display an error notification.

```tsx
notify.error('Error message', {
  duration: 3000,
  position: 'top-right',
});
```

#### `warning(message, options?)`

Display a warning notification.

```tsx
notify.warning('Warning message', {
  duration: 3000,
  position: 'top-right',
});
```

#### `info(message, options?)`

Display an info notification.

```tsx
notify.info('Info message', {
  duration: 3000,
  position: 'top-right',
});
```

## Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `type` | `'success' \| 'error' \| 'warning' \| 'info'` | `'info'` | Type of notification |
| `duration` | `number` | `3000` | Duration in milliseconds before auto-dismiss |
| `position` | `'top-left' \| 'top-right' \| 'top-center' \| 'bottom-left' \| 'bottom-right' \| 'bottom-center'` | `'top-right'` | Position of the notification |

## Positions

The library supports 6 different positions:

- `top-left`
- `top-right` (default)
- `top-center`
- `bottom-left`
- `bottom-right`
- `bottom-center`

## Customization

You can customize the styles by overriding the CSS classes:

```css
/* Override toast styles */
.toast {
  /* Your custom styles */
}

.toast-success {
  /* Custom success styles */
}

.toast-error {
  /* Custom error styles */
}

.toast-warning {
  /* Custom warning styles */
}

.toast-info {
  /* Custom info styles */
}
```

## TypeScript

This library is written in TypeScript and includes type definitions.

```tsx
import { ToastType, ToastOptions, Toast } from 'react-notify-lite';
```

## Examples

### Multiple Notifications

```tsx
function Example() {
  const notify = useNotify();

  const showMultiple = () => {
    notify.success('First notification');
    notify.info('Second notification');
    notify.warning('Third notification');
  };

  return <button onClick={showMultiple}>Show Multiple</button>;
}
```

### Different Positions

```tsx
function Example() {
  const notify = useNotify();

  const showAtPosition = (position: string) => {
    notify.success(`Notification at ${position}`, { position });
  };

  return (
    <div>
      <button onClick={() => showAtPosition('top-left')}>Top Left</button>
      <button onClick={() => showAtPosition('top-right')}>Top Right</button>
      <button onClick={() => showAtPosition('bottom-center')}>Bottom Center</button>
    </div>
  );
}
```

### Custom Duration

```tsx
function Example() {
  const notify = useNotify();

  const showLongNotification = () => {
    notify.info('This will stay for 10 seconds', { duration: 10000 });
  };

  return <button onClick={showLongNotification}>Show Long Notification</button>;
}
```

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Issues

If you find a bug or have a feature request, please open an issue on GitHub.
