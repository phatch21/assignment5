using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace assignment5.Pages
{
    public class CalcModel : PageModel
    {
        private readonly ILogger<CalcModel> _logger;

        public CalcModel(ILogger<CalcModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {
        }
    }

}
