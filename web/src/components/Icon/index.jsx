import { ReactComponent as arrowLeft } from './svgs/arrow-left.svg'

const icons = {
    arrowLeft
}

export const Icon = ({ name, ...props }) => {
    const Element = icons[name]
    return <Element {...props} />
}