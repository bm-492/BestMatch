import {
	FormControlLabel,
	FormGroup,
	Grid,
	Typography,
	Checkbox,
} from '@mui/material'
import { range } from '@utility/util'

type TimeRangeCheckBoxGroupProps = {
	fieldName: string
	helper: string
}

const TimeCheckBoxRow = ({ time, checked }: { time: number, checked?: boolean }) => {
	return (
		<FormControlLabel
			key={`${time}.00`}
			control={<Checkbox />}
			label={`${time.toString().padStart(2, '0')}:00`}
			checked={checked}
			sx={{ my: 1 }}
		/>
	)
}

const TimeRangeCheckBoxGroup = ({
	fieldName,
	helper,
}: TimeRangeCheckBoxGroupProps) => {
	return (
		<Grid container>
			<Grid item xs={12}>
				<Typography variant='body1'>{fieldName}</Typography>
				<Typography
					variant='subtitle1'
					fontSize={14}
					color={'red'}
					sx={{ ml: 1 }}
				>{`* ${helper}`}</Typography>
			</Grid>
			{[1, 7, 13, 18].map((start) => {
				return (
					<Grid item xs={12}>
						<FormGroup row sx={{ ml: 2 }}>
							{ range(start, start +6).map( time => {
								return <TimeCheckBoxRow time={time} checked={start === 1} />
							})}
						</FormGroup>
					</Grid>
				)
			})}
		</Grid>
	)
}

export default TimeRangeCheckBoxGroup
