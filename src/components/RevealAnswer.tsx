import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [vis, newvis] = useState<boolean>(false);

    function changevis(): void {
        newvis(!vis);
    }
    return (
        <div>
            <Button onClick={changevis}>Reveal Answer</Button>
            {vis && <div>42</div>}
        </div>
    );
}
