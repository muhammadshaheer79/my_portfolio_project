import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const Modal = ({ setModal, resume }) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div className="modal-container">
      <div className="backshadow">
        <div className="custom-modal">
          <div className="delete-icon" onClick={() => setModal(false)}>
            x
          </div>
          {/* {resume !== null && (
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js">
              <Viewer fileUrl={resume} plugins={[defaultLayoutPluginInstance]} />
            </Worker>
          )} */}
          {resume ? (
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js">
              <Viewer fileUrl={resume} plugins={[defaultLayoutPluginInstance]} />
            </Worker>
          ) : (
            <p>Failed to load file</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
