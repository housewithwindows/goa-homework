
    const ParentComponent = () => {
      const myName = 'Luka';
  
      return (
        <div>
          <ChildComponent name={myName} />
        </div>
      );
    };
  
    const ChildComponent = (props) => {
      return (
        <div>
          <p>{props.name}</p>
        </div>
      );
    };
  
    return <ParentComponent />;
  
  
  
  