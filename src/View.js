import Button from "@mui/material/Button";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const API = import.meta.env.BACKEND_API_URL;

export default function View() {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchResponse = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API}/api/get`);

        if (response.status === 200) {
          setResult(response.data);
          setLoading(false);
        }
      } catch (error) {
        console.error(error);
      }
      finally{
        setLoading(false);
      }
    };

    fetchResponse();
  }, []);

  return (
    <>
      <div className="container mt-4">
        <div className="card">
          <div className="card-header">
            <div className="d-flex align-items-center justify-content-between">
            <h4>All Search History</h4>
            <Button variant="contained" onClick={() => {navigate("/")}}>Back</Button>
            </div>
          </div>
          <div className="card-body">
            {loading ? <div className="d-flex justify-content-center align-items-center"><div className="spinner-border spinner-border-sm text-secondary me-2" role="status"></div><strong>Loading...</strong></div> 
            
            : result.length > 0 ? result.map((item, index) => (

            <div className="accordion mb-3" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${index}`}
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    <h6>{item.prompt}</h6>
                  </button>
                </h2>
                <div
                  id={`collapse${index}`}
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <small>{item.AI_response}</small>
                  </div>
                </div>
              </div>
            </div>
            )): <div className="d-flex justify-content-center"><h6>No Search History</h6></div>}
          </div>
        </div>
      </div>
    </>
  );
}
