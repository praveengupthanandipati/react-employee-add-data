import './App.css';
import React, {useState} from 'react';

function App() {
  let city ="Hyderabad";
  let company = "Core web pro Pvt Ltd";

  const [employees, setEmployees] = useState([]);
  const [formData, setFormData] = useState({
    id:'',
    name:'',
    position:'',
    exp:'',
    location:'',
    salary:''
  });
  const handleInputChange=(e)=>{
    setFormData({...formData, [e.target.name]: e.target.value})
  };
  const handleSubmit=(e)=>{
    e.preventDefault();
    setEmployees([...employees, formData]);
    setFormData({
      id:'',
      name:'',
      position:'',
      exp:'',
      location:'',
      salary:''
    });
  }
  return (
    <div className="App">
      <div class="container">
        <h1>Employees of {company}, {city}</h1>
        <form onSubmit={handleSubmit} className='form'>
            <div className="form-group">
                <div className="form-control">
                  <label>Employee ID</label>
                  <input 
                      type="text"
                      name="id"
                      value={formData.id}
                      onChange={handleInputChange} 
                      placeholder='Employee ID'                    
                  />
                </div>
                <div className='form-control'>
                  <label>Name of Employee</label>
                  <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder='Name' 
                  />
                </div>
                <div className='form-control'>
                    <label>Position</label>
                    <input
                      type="text"
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      placeholder='Ex: Software Engineer' 
                    />
                </div>
                <div className='form-control'>
                    <label>Experience in Yrs</label>
                    <input
                      type="text"
                      name="exp"
                      value={formData.exp}
                      onChange={handleInputChange}
                      placeholder='Ex: 12' 
                    />
                </div>
                <div className='form-control'>
                  <label>Location</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder='Ex: Hyderabad' 
                  />
                </div>
                <div className='form-control'>
                  <label>Salary</label>
                  <input
                    type="text"
                    name="salary"
                    value={formData.salary}
                    onChange={handleInputChange}
                    placeholder='Ex: 12000' 
                  />
                </div>                
            </div>
            <button type='submit'>Add Employee</button>
        </form>

        <table cellPadding="0" cellspacing="0">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Employee Name</th>
                    <th>Position</th>
                    <th>Experience</th>
                    <th>Location</th>
                    <th>Salary</th>
                </tr>
            </thead>
            <tbody>
                {employees.map((employee, index)=>(
                  <tr key={index}>
                    <td>{employee.id}</td>
                    <td>{employee.name}</td>
                    <td>{employee.position}</td>
                    <td>{employee.exp}</td>
                    <td>{employee.location}</td>
                    <td>{employee.salary}</td>
                </tr>
                ))}
            </tbody>
        </table>
        </div>
    </div>
  );
}

export default App;
