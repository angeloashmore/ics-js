import Property from '../Property';

export default function(name) {
  return class _default extends Property {
    static propName = name;
  };
}
