import { Switch, Route } from 'react-router-dom'
import MobilesList from '../pages/mobile/MobilesList'

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact render={() => <MobilesList />} />
        </Switch>
    )
}
export default Routes