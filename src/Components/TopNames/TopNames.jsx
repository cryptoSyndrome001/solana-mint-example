import classes from './top.module.css'
import AddIcon from '@material-ui/icons/Add'
const TopNames = ({ active, activeHandler }) => {
  return (
    <div className={classes.container}>
      <ul>
        {[
          'Accessories',
          'Background',
          'Body',
          'Earring',
          'Eyes',
          'Head',
          'Mouth',
          'Shoes',
          'Tops',
          'Trousers',
          'Watch',
        ].map((element, id) => {
          return (
            <li
              key={id}
              className={active === element && classes.activeClass}
              onClick={() => activeHandler(element)}
            >
              {element}
              <AddIcon />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default TopNames
