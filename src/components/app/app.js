import AppInfo from '../app-info/app-info';
import SearchPanel from '../searc-panel/searc-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.css';

function App() {

    const data = [
        {name: 'Alex G.', salary: 5000, increase: false},
        {name: 'Denis T.', salary: 3000, increase: true},
        {name: 'Vika A.', salary: 8800, increase: false},
    ];

    return(
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployersList data={data}/>
            <EmployersAddForm/>
        </div>
    );
}

export default App;