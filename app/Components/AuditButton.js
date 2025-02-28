
const AuditButton = () => {
  return (
    <button className="flex items-center justify-between md:w-64 w-full px-4 py-2 border border-violet-950 rounded-full  font-medium text-violet-950 " >
      <span>Audit your Website</span>
      <div className=" text-white p-2 px-3 rounded-full" style={{backgroundColor:'#140152'}}>
      &#8599;
      </div>
    </button>
  );
};

export default AuditButton;
