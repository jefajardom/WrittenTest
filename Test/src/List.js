import React, { Component } from 'react'
import { getList, updateItem, updateItem2, updateItem3, updateItem4} from './ListFunctions'


class List extends Component {
    constructor() {
        super()
        this.state = {
            id: '',
            term: '',
			Sequence: '',
			Machine: '',
            editDisabled: false,
            items: []
        }
    }

    componentDidMount () {
        this.getAll()
    }

    onChange = e => {
        this.setState({
            term: e.target.value,
            editDisabled: 'disabled'
        })
    }

    getAll = () => {
        getList().then(data => {
            this.setState({
                term: '',
                items: [...data]
            },
                () => {
                    console.log(this.state.term)
                })
        })
    }


    onUpdate = e => {
        e.preventDefault()
        updateItem(this.state.term, this.state.id).then(() => {
            this.getAll()
        })
    }
	
	

    onEdit = (item, itemid, e) => {
        e.preventDefault()
        this.setState({
            id: itemid,
            term: item
        })
        console.log(itemid)
    }



    render () {
        return (
            <div className="col-md-12">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
					
                        <label htmlFor="input1">Job Name</label>
                        <div className="row">
                            <div className="col-md-9">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="input1"
                                    value={this.state.term || ''}
                                    onChange={this.onChange.bind(this)}
                                />
                            </div>
                            <div className="col-md-2">
                                <button className="btn btn-primary"
                                    onClick={this.onUpdate.bind(this)}>
                                    Update
                                </button>	
                            </div>
                        </div>
						
						<label htmlFor="input2">Task_A ID</label>
                        <div className="row">
                            <div className="col-md-9">
                                <input
                                    type="Integer"
                                    className="form-control"
                                    id="input2"
                                    value={this.state.term || ''}
                                    onChange={this.onChange.bind(this)}
                                />
                            </div>
                            <div className="col-md-2">
                                <button className="btn btn-primary"
                                    onClick={this.onUpdate.bind(this)}>
                                    Update
                                </button>
                            </div>
                        </div>
						
						<label htmlFor="input3">Task_A Sequence ID</label>
                        <div className="row">
                            <div className="col-md-9">
                                <input
                                    type="Integer"
                                    className="form-control"
                                    id="input3"
                                    value={this.state.term || ''}
                                    onChange={this.onChange.bind(this)}
                                />
                            </div>
                            <div className="col-md-2">
                                <button className="btn btn-primary"
                                    onClick={this.onUpdate.bind(this)}>
                                    Update
                                </button>
                            </div>
                        </div>
						
						<label htmlFor="input4">Task_A Machine</label>
                        <div className="row">
                            <div className="col-md-9">
                                <input
                                    type="Integer"
                                    className="form-control"
                                    id="input4"
                                    value={this.state.term || ''}
                                    onChange={this.onChange.bind(this)}
                                />
                            </div>
                            <div className="col-md-2">
                                <button className="btn btn-primary"
                                    onClick={this.onUpdate.bind(this)}>
                                    Update
                                </button>
                            </div>
                        </div>
						
                    </div>
                </form>
                <table className="table">
                    <tbody>
                        {this.state.items.map((item, index) => (
                            <tr key={index}>
                                <td className="text-left">{item[0]}</td>
                                <td className="text-right">
                                    <button className="btn btn-info mr-1"
                                        disabled={this.state.editDisabled}
                                        onClick={this.onEdit.bind(this, item[0], item[1])}>
                                        Edit
                                    </button>

                                    <button className="btn btn-danger"
                                        disabled={this.state.editDisabled}
                                        onClick={this.onDelete.bind(this, item[1])}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default List