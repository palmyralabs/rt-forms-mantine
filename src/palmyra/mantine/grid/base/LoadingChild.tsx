import { Loader } from '@mantine/core';

const LoadingChild = () => {
    return (
        <div className='py-loading-container'>
            <Loader size={25} />
            <span>Loading Data...</span>
        </div>
    )
}

export default LoadingChild