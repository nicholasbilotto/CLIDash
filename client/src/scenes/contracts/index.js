import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.css";
import "primeicons/primeicons.css";

import { Button } from "primereact/button";
import { useGetContractsQuery } from "state/api";

// You can further customize this toolbar as needed
const CustomToolbar = () => {
	return (
		<div>
			{/* Uncomment or modify these buttons as per your requirements */}
			{/* <Button label="New Contract" className="p-button-raised p-button-primary" /> */}
			{/* <Button label="Export" className="p-button-raised p-button-secondary" /> */}
		</div>
	);
};
const Contracts = () => {
	const { data, isLoading } = useGetContractsQuery();
	const [collapsedLicensors, setCollapsedLicensors] = useState({});

	useEffect(() => {
		// Initialize state based on data here
	}, [data]);

	if (isLoading) return <div>Loading...</div>;

	const dynamicColumns = Object.keys(data[0]).map((col) => {
		return (
			<Column
				key={col}
				field={col}
				header={col}
				style={{ width: "150px" }}
			/>
		);
	});

	return (
		<div>
			<DataTable value={data}>{dynamicColumns}</DataTable>
		</div>
	);
};

export default Contracts;
