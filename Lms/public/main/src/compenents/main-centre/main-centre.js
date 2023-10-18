import './main-centre.css';

const MainCentre = () => {
    return (
            <div className="main-centre">
            <div className="greeting-search">
                <h1>Привіт ...</h1>
                <form action="/hello_name" method="post">
                <div className="form-group">
                    <input type="text" id="name" name="name" placeholder="Пошук курсів..." />
                    <button type="search">Пошук</button>
                </div>
                </form>
            </div>
            <p>Давайте сьогодні навчимося чомусь новому!</p>
            <div className=' space'>
            <button type="button" name="course" ></button>
            </div>
            </div>

    );
}

export default MainCentre;
