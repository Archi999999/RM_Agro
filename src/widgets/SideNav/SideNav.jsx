import { Button } from '../../shared/ui/Button/Button';

export const SideNav = ({className, setSelectedChart}) => {
  return (
    <nav>
      <ul className={className}>
        <li>
          <Button
            onClick={() => setSelectedChart('line')}
            fullWidth
          >
            Линейный график
          </Button>
        </li>
        <li>
          <Button
            onClick={() => setSelectedChart('bar')}
            fullWidth
          >
            Столбчатая диаграмма
          </Button>
        </li>
        <li>
          <Button
            onClick={() => setSelectedChart('pie')}
            fullWidth
          >
            Круговая диаграмма
          </Button>
        </li>
      </ul>
    </nav>
  )
}