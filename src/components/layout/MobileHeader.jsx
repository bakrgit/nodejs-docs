import Brand from '../ui/Brand'; import Icon from '../ui/Icon'
export default function MobileHeader({ onOpen }) { return <header className="mobile"><button onClick={onOpen} aria-label="القائمة"><Icon name="menu" /></button><Brand /><small>1 / 250</small></header> }
