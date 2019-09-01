import axios from 'axios'

export const getList = () => {
    return axios
        .get('api/Machine', {
            headers: { "Content-type": "application/json" }
        })
        .then(res => {
            var data = []
            Object.keys(res.data).forEach((key) => {
                var val = res.data[key]
                data.push([val.name, val.id, val.Sequence])
            })

            return data
        })
}

/* Job name */
export const updateItem = (term, id) => {
    return axios
        .put(
            `api/Job/${id}`, {
                name: term
            }, {
                headers: { "Content-type": "application/json" }
            })
        .then((res) => {
            console.log(res)
        })
}
/* Task id */
export const updateItem2 = (term, id) => {
    return axios
        .put(
            `api/Task/${id}`, {
                id: term
            }, {
                headers: { "Content-type": "application/json" }
            })
        .then((res) => {
            console.log(res)
        })
}
/* Task Sequenc */
export const updateItem3 = (term, Sequence) => {
    return axios
        .put(
            `api/Task/${Sequence}`, {	
                Sequence: Sequence
            }, {
                headers: { "Content-type": "application/json" }
            })
        .then((res) => {
            console.log(res)
        })
} 

/* Task Machine */
export const updateItem4 = (term, Machine) => {
    return axios
        .put(
            `api/Task/${Machine}`, {	
                Sequence: Machine
            }, {
                headers: { "Content-type": "application/json" }
            })
        .then((res) => {
            console.log(res)
        })
} 

