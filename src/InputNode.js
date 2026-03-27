
import { Handle, Position } from "reactflow";
import TextField from "@mui/material/TextField";

const InputNode = ({ data }) => {
  return (
    <div style={{ padding: 10, border: "1px solid #555", borderRadius: 8,  width: "90vw",       
    maxWidth: "1000px",    
    minWidth: "250px",    
 }}>
      <div style={{ fontWeight: "bold", marginBottom: 5 }}>Text Input Node</div>

      <TextField 
        id="outlined-basic" 
        label="Ask Anything..." 
        variant="outlined" 
        type="text"
        value={data.prompt}
        fullWidth
        onChange={(e) => data.setPrompt(e.target.value)}
        style={{ marginTop: 5 }}
        size="small"
      />

      <Handle type="source" position={Position.Top} />
    </div>
  );
};

export default InputNode;