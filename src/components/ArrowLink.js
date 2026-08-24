import { navigateTo } from './Navigation';

export default function ArrowLink({ children, screen = 'contact' }) {
  return <button className="arrow-link" onClick={() => navigateTo(screen)}>{children} <span>↗</span></button>;
}
