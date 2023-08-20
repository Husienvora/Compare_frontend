import { useEffect } from "react";
import { useNormalContext } from "../Context/Contex";
function SidePanel() {
  const { modelsList, CurrentlySelected, setCurrentlySelected } =
    useNormalContext();
  const handleSelect = (modelname) => {
    setCurrentlySelected(modelname);
  };

  useEffect(() => {
    console.log(modelsList);
  }, []);
  return (
    <div className="sidePanel">
      <div>
        {Object.keys(modelsList).map((ele) => {
          return (
            <div className="collapse ">
              <input type="checkbox" name="my-accordion-1" />
              <div className="collapse-title  font-sans font-medium">
                {ele}
                {modelsList[ele].minBillingTier ? (
                  <span className="btn btn-sm btn-warning ml-3">Pro</span>
                ) : (
                  ""
                )}
              </div>
              <div className="collapse-content">
                <div className="card-body">
                  <h2 className="card-title">{modelsList[ele].id} </h2>
                  <p font-sans>{modelsList[ele].info.description}</p>

                  <div className="card-actions justify-center mt-5">
                    {modelsList[ele].minBillingTier ? (
                      <button className="btn glass  btn-error">
                        Not available
                      </button>
                    ) : CurrentlySelected == ele ? (
                      <button className="btn  btn-outline btn-success">
                        Using
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          handleSelect(ele);
                        }}
                        className="btn glass btn-outline btn-success"
                      >
                        Try
                      </button>
                    )}
                  </div>
                  <div className="card-actions justify-center mt-5">
                    <button
                      onClick={() => {
                        window.open(modelsList[ele].info.modelUrl);
                      }}
                      className="btn glass btn-outline btn-success"
                    >
                      Visit website
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SidePanel;
