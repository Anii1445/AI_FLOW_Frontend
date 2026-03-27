import { useState, useMemo } from "react";
import ReactFlow from "reactflow";
import "reactflow/dist/style.css";
import axios from "axios";
import InputNode from "./InputNode";
import ResultNode from "./ResultNode";
import { FaArrowCircleUp } from "react-icons/fa";
import Button from '@mui/material/Button';
import { IoSave } from "react-icons/io5";
import { toast } from 'react-toastify';
import { FaStopCircle } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa6";
const API = process.env.REACT_APP_BACKEND_API_URL;


const initialEdges = [
  { id: "e1-2", source: "1", target: "2" },
];

function Home() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [saveLoading, setSaveLoading] = useState(false);
  const navigate = useNavigate();

  const nodes = [
    {
      id: "1",
      type: "inputNode",
      position: { x: 100, y: 500 },
      data: { prompt, setPrompt },
    },
    {
      id: "2",
      type: "resultNode",
      position: { x: 100, y: 100 },
      data: {
         response, loading
      },
    },
  ];

  const nodeTypes = useMemo(() => ({
     inputNode: InputNode,
     resultNode: ResultNode,
  }), []);
  
  const runFlow = async () => {
    try {
      setLoading(true);
      const res = await axios.post(`${API}/api/ask-ai`, {
        prompt,
      });

      if(res){
      setResponse(res.data.response);
      setLoading(false);
      }
    } catch (err) {
      console.error(err);
      if(!prompt){
       toast.error("Please enter a prompt!")
      }
      else{
      toast.error("Something went wrong!");
    }
    }
    finally{
        setLoading(false);
    }
  };

  const save = async() => {
    try {
      setSaveLoading(true);
      const res = await axios.post(`${API}/api/add`,{
        prompt: prompt,
        AI_response: response
      });

      if(res.status === 200){
        toast.success("Saved Successfully!!")
        setSaveLoading(false);
      }
      
    } catch (error) {
      console.error(error);
      if (error.response) {
      toast.error(error.response.data?.msg);
       } else {
      toast.error("Network error");
     }
    }
    finally{
      setSaveLoading(false);
    }
  }

  return (
    <>
    <div style={{ height: "100vh" }}>
      <Button
        variant="contained"
        onClick={runFlow}
        style={{ position: "absolute", top: 610, left: 100, zIndex: 10 }}
        endIcon={loading ? <FaStopCircle/> : <FaArrowCircleUp />}
      >
        {loading ? "Running..." : "Run Flow"}
      </Button>
      <Button
        variant="outlined"
        onClick={save}
        style={{ position: "absolute", top: 610, left: 245, zIndex: 10 }}
        endIcon={saveLoading ? <AiOutlineLoading3Quarters/> : <IoSave />}
      >
        {saveLoading ? "Saving..." : "Save"}
      </Button>
      <Button
        variant="contained"
        onClick={() => { navigate("/view") }}
        style={{ position: "absolute", top: 610, left: 905, zIndex: 10 }}
        endIcon={<FaEye/>}
      >
        Show All Search
      </Button>


      <ReactFlow nodes={nodes} edges={initialEdges} nodeTypes={nodeTypes} 
        nodesDraggable={false}
         nodesConnectable={false}
        panOnDrag={false}
        zoomOnScroll={false}
         zoomOnPinch={false}  >
        {/* <Background />
        <Controls /> */}
      </ReactFlow>
    </div>

    </>
  );
}

export default Home;