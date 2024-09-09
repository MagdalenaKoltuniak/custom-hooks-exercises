import { useNumbers } from './hooks/useNumbers';

export const Numbers = () => {
	const { numbers, generateNumber, deleteNumber } = useNumbers();
	
	return (
		<>
			<h1>{numbers}</h1>
			<button onClick={generateNumber}>Add number</button>

			<ul>
				{numbers.map((number, index) => (
					<li key={index}>
						<p>{number}</p>
						<button onClick={() => deleteNumber(index)}>Delete number</button>
					</li>
				))}
			</ul>
		</>
	);
};
