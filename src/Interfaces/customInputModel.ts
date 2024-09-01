import React, { ChangeEvent } from "react";

export default interface customInputModel {
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}