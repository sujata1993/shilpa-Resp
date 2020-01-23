import React from 'react';

class SubList extends React.Component {

    componentDidMount() {

        var reactModules = [
            { "name": "Permanent-OPS Cargo Driver Airside" },
            { "name": "Permanent-Cargo Warehouse Airside" }

        ];
        this.setState({
            data: reactModules
        });
    }
    constructor() {
        super();

        this.state = {
            "name":"",
            "data": []
        }
    }
    handleEvent(e) {
        this.setState({
            name: e.target.value
            
        });
    }
    render() {
        var { data } = this.state;
        var { name } = this.state;
        const lowercasedFilter = name.toLowerCase();
        const filteredData = data.filter(item => {
            return Object.keys(item).some(key =>
                item.name.toLowerCase().includes(lowercasedFilter)
            );
        });
        return (
            <div className="container" >

                <div className="row">
                    <div className="col-sm-4">
                        <div>

                            <input type="text" className="form-control" placeholder="Search..." value={name} onChange={(event) => this.handleEvent(event)}></input>
                        </div>
                        <ul className="nav nav-pills flex-column">
                            {filteredData.map((item, index) => (<li className="nav-item">
                                {item.name}
                            </li>))}

                        </ul>
                        <hr className="d-sm-none" />
                    </div>
                    <div className="col-sm-8">




                    </div>
                </div>


            </div>
        );
    }
}

export default SubList;