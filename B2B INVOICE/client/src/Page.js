import axios from 'axios';
import { saveAs } from 'file-saver'

function Page() {
    const downloadPDF = async () => {
        const response = await axios.get('http://localhost:8080/api/generate/report', {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            responseType: 'arraybuffer'
        })

        const blob = new Blob([response.data], { type: 'application/pdf' })

        saveAs(blob, "Invoice.pdf")

    }
    return (
        <div className="d-flex align-items-center justify-content-center mt-5"  >
            <button type="button" className="btn btn-primary margin-top='20px'" onClick={downloadPDF}> Download PDF</button>
        </div>
    );
}

export default Page;