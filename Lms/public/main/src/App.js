
import './App.css';
import AppInfo from "../src/compenents/app-info/app-info";
import PanelWork from './compenents/panel-work/panel-work';
import MainCentre from './compenents/main-centre/main-centre';

function App()
{
    return(
           <div>
            <PanelWork/> 
           <MainCentre/>
    <AppInfo/>
    </div>    
           
            
    );
}

export default App;