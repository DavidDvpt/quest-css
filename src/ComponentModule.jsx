import component from "./component.module.css";

const ComponentModule = () => {
  return (
    <div className={component.container}>
      <div className={component.flex_row}>
        <img
          src="https://em.wattpad.com/5ffe48203a9f68be268f7a2ae328cea57bdf26bb/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f6e594f306c2d34455875536442673d3d2d3330383537353931352e313437323230386365623234353963323633313637333932373732382e6a7067"
          alt=" naruto"
        />
        <div>
          <h1>UZUMAKI Naruto</h1>
          <p>
            <span>Description</span>: Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptate qui aperiam neque alias voluptates
            perferendis, aspernatur dolor in quasi quidem reiciendis.
            Consequatur rem, corporis ipsa quod odio obcaecati quibusdam error?
          </p>
        </div>
      </div>
      <div className={component.flex_row}>
        <h3>Avis des lecteurs</h3>
        <div className={component.etoile}>
          &#9733;&#9733;&#9733;&#9733;&#9733;
        </div>
      </div>
    </div>
  );
};

export default ComponentModule;
