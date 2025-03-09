import Child from "./child";
import ErrorBoundary from "./errorboundary";



return(
    <ErrorBoundary>
        <Child error={true} />
    </ErrorBoundary>
)