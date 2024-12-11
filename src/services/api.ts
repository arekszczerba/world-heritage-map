import Papa from 'papaparse';

export const parseCSV = (file: File) => {
	return new Promise((resolve, reject) => {
		Papa.parse(file, {
		header: true,
		complete: (results) => resolve(results.data),
		error: (error) => reject(error),
		});
	});
}