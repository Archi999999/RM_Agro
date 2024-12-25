import { Button } from '../../shared/ui/Button/Button';
import {navOptions} from "./navOptions";

export const SideNav = ({className, setSelectedChart}) => {
  return (
    <nav>
      <ul className={className}>
        {navOptions.map((nav, i)=> (
          <li key={nav + i}>
            <Button
              onClick={() => setSelectedChart(nav.value)}
              fullWidth
            >
              {nav.label}
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  )
}