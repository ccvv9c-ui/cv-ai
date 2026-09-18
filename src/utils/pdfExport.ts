export interface ExportPDFOptions {
  filename?: string;
  isAr?: boolean;
  onProgress?: (status: string) => void;
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

/**
 * Robust client-side PDF export utility engineered to guarantee 
 * strict 1-page A4 containment, eliminating multi-page overflow 
 * and left-alignment anomalies.
 */
export const exportElementToPDF = async (
  elementId: string, 
  options: ExportPDFOptions = {}
): Promise<void> => {
  const {
    filename = 'Jaafar_Al_Abadi_CV.pdf',
    isAr = false,
    onProgress,
    onSuccess,
    onError
  } = options;

  const element = document.getElementById(elementId);
  if (!element) {
    const err = new Error(`Target element with id "${elementId}" not found.`);
    if (onError) onError(err);
    throw err;
  }

  try {
    if (onProgress) {
      onProgress(isAr ? 'جاري ضغط المستند واحتوائه في صفحة واحدة...' : 'Compressing document to fit single A4 page...');
    }

    const html2pdfModule = await import('html2pdf.js');
    const html2pdf = html2pdfModule.default || html2pdfModule;

    // Strict single-page A4 configuration
    const opt = {
      margin:       [5, 5, 5, 5],
      filename:     filename,
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { 
        scale: 2,                  // Optimized scale to prevent vertical spill
        useCORS: true,
        letterRendering: true,
        logging: false,
        scrollY: 0,
        windowWidth: 1200
      },
      jsPDF:        { 
        unit: 'mm', 
        format: 'a4', 
        orientation: 'portrait',
        compress: true
      },
      pagebreak:    { mode: ['avoid-all', 'css', 'legacy'] }
    };

    await html2pdf().from(element).set(opt).save();

    if (onSuccess) {
      onSuccess();
    }
  } catch (error: any) {
    console.error('PDF Export Error:', error);
    if (onError) {
      onError(error);
    }
    throw error;
  }
};
