import React, {useEffect} from 'react';

const TsxDemo: React.FC<{}> = () => {
    useEffect(() => {
        console.log('useEffect');
    }, []);
    return (
        <div>ts-demo</div>
    );
};
export {TsxDemo};