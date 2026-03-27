
import { Handle, Position } from "reactflow";

const ResultNode = ({ data }) => {

  return (
    <div
      style={{
        padding: 10,
        border: "1px solid #555",
        borderRadius: 8,
        background: "#f9f9f9",
         width: "90vw",
         maxWidth: "1000px",
         minWidth: "250px",
      }}
    >
     
      <div style={{ fontWeight: "bold", marginBottom: 5 }}>
        Result Node
      </div>

      <div
        style={{
          fontSize: 14,
          maxHeight: 220,
          overflowY: "auto",
          whiteSpace: "pre-wrap",
          width: "100%",
          userSelect: "text", 
        }}
      >
        {data.loading ? <div class="spinner-grow spinner-grow-sm text-dark" role="status">
           <span class="visually-hidden">Loading...</span>
        </div>
        : data.response || "Result will appear here"}
      </div>

    
      <Handle type="target" position={Position.Bottom} />
    </div>
  );
};

export default ResultNode;