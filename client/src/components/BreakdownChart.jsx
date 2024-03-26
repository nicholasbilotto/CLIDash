import React from "react";
import { ResponsivePie } from "@nivo/pie";
import { Box, Typography, useTheme } from "@mui/material";
import { useGetRoyaltiesQuery } from "state/api";

const BreakdownChart = ({ isDashboard = false }) => {
	const { data, isLoading } = useGetRoyaltiesQuery();
	const theme = useTheme();

	if (!data || isLoading) return "Loading...";

	const colors = [
		theme.palette.secondary[500],
		theme.palette.secondary[300],
		theme.palette.secondary[300],
		theme.palette.secondary[500],
	];

	// First, we reduce the data to an object where each key is a category and each value is the total income for that category
	const categoriesIncome = data.reduce((acc, cur) => {
		const category = cur.Category;
		const totalIncome =
			cur.JANUARY +
			cur.FEBRUARY +
			cur.MARCH +
			cur.APRIL +
			cur.MAY +
			cur.JUNE +
			cur.JULY +
			cur.AUGUST +
			cur.SEPTEMBER +
			cur.OCTOBER +
			cur.NOVEMBER +
			cur.DECEMBER;
		if (acc[category]) {
			acc[category] += totalIncome;
		} else {
			acc[category] = totalIncome;
		}
		return acc;
	}, {});

	// Then we transform this object to an array that can be used by the ResponsivePie component
	const formattedData = Object.entries(categoriesIncome).map(
		([category, income], i) => ({
			id: category,
			label: category,
			value: parseFloat(income.toFixed(2)),
		})
	);

	const yearlySalesTotal = formattedData.reduce(
		(acc, cur) => acc + cur.value,
		0
	);

	const formattedYearlySalesTotal = new Intl.NumberFormat("en-US").format(
		Math.round(yearlySalesTotal)
	);

	return (
		<Box
			height={isDashboard ? "400px" : "100%"}
			width={undefined}
			minHeight={isDashboard ? "325px" : undefined}
			minWidth={isDashboard ? "325px" : undefined}
			position="relative"
		>
			<ResponsivePie
				data={formattedData}
				theme={{
					axis: {
						domain: {
							line: {
								stroke: theme.palette.secondary[200],
							},
						},
						legend: {
							text: {
								fill: theme.palette.secondary[200],
							},
						},
						ticks: {
							line: {
								stroke: theme.palette.secondary[200],
								strokeWidth: 1,
							},
							text: {
								fill: theme.palette.secondary[200],
							},
						},
					},
					legends: {
						text: {
							fill: theme.palette.text.primary, // Updated color
						},
					},
					tooltip: {
						container: {
							background: theme.palette.background.default, // Make tooltip background suitable for dark mode
							color: theme.palette.text.primary, // Updated color
						},
					},
				}}
				colors={{ scheme: "nivo" }}
				margin={
					isDashboard
						? { top: 1, right: 10, bottom: 1, left: 1 }
						: { top: 40, right: 80, bottom: 80, left: 80 }
				}
				sortByValue={true}
				innerRadius={0.45}
				activeOuterRadiusOffset={8}
				borderWidth={3}
				borderColor={{
					from: "color",
					modifiers: [["darker", 0.3]],
				}}
				enableArcLinkLabels={!isDashboard}
				arcLinkLabelsTextColor={theme.palette.text.primary}
				arcLinkLabelsThickness={2}
				arcLinkLabelsColor={{ from: "color" }}
				arcLabelsSkipAngle={10}
				arcLabelsTextColor={{
					from: "color",
					modifiers: [["darker", 2]], // Consider modifying this to improve visibility in dark mode
				}}
				legends={
					!isDashboard && [
						{
							anchor: "right",
							direction: "column",
							justify: false,
							translateX: isDashboard ? 20 : 0,
							translateY: isDashboard ? 50 : 56,
							itemsSpacing: 10,
							itemWidth: 85,
							itemHeight: 18,
							itemTextColor: theme.palette.text.primary,
							itemDirection: "left-to-right",
							itemOpacity: 1,
							symbolSize: 20,
							symbolShape: "circle",
							effects: [
								{
									on: "hover",
									style: {
										itemTextColor: theme.palette.primary[500],
									},
								},
							],
						},
					]
				}
			/>
			<Box
				position="absolute"
				top="50%"
				left="50%"
				color={theme.palette.secondary[400]}
				textAlign="center"
				pointerEvents="none"
				sx={{
					transform: isDashboard
						? "translate(-50%, -50%)"
						: "translate(-50%, -100%)",
				}}
			>
				<Typography variant="h6">
					{!isDashboard && "Total: "}${formattedYearlySalesTotal}
				</Typography>
			</Box>
		</Box>
	);
};

export default BreakdownChart;
