import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const AddTaskForm = (props) => {

  return (
   <Box
    component="form"
    sx={{
      '& .MuiOutlinedInput-root': { m: 1, width: '30ch' },
    }}
    onSubmit={props.submit}
  >
       <div>
        <TextField
          required
          id="outlined-required"
          name="title"
          label="Task Title"
          InputLabelProps={{ shrink: true }}
          onChange={(event) => props.change(event)}
        />
      </div>
      <div>
        <TextField
          required
          name="deadline"
          label="Deadline"
          InputLabelProps={{ shrink: true }}
          type="date"
          onChange={(event) => props.change(event)}
        />
      </div>      
      <div>
        <Select
          label="Priority"
          name="priority"
          onChange={(event) => props.change(event)}
          value={props.priority} 
          sx={{ m: 1, width: '30ch' }}
        >
          <MenuItem value="low">Low</MenuItem>
          <MenuItem value="medium">Medium</MenuItem>
          <MenuItem value="high">High</MenuItem>
        </Select>
      </div>
      <div>
        <TextField
          name="description"
          id="outlined-multiline-static"
          label="Task Details"
          InputLabelProps={{ shrink: true }}
          multiline
          rows={4}
          onChange={(event) => props.change(event)}
        />
      </div>

      <div>
        <Button 
          type="submit"
          variant="contained"
          color="primary"
          sx={{
            m: 1,
            p: 1,
            width: '95%'
          }}
        >
          Add Task
        </Button>
      </div>

  </Box>
  )
};
export default AddTaskForm;


/*export function PrioritySelect() {
  const [selectedPriority, setSelectedPriority] = useState('low'); // 设置默认优先级为低

  const handlePriorityChange = (event) => {
    setSelectedPriority(event.target.value);
  };

  return (
    <Box>
      <TextField
        id="select-priority"
        select
        value={selectedPriority}
        onChange={handlePriorityChange}
        variant="outlined"
        fullWidth
      >
        {priorities.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
}*/