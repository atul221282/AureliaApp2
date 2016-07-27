using System.Threading.Tasks;
using System.Web.Mvc;

namespace AureliaApp.Mvc.Controllers
{
    public class TemplateController : Controller
    {
        // GET: Template
        [AllowAnonymous]
        public async Task<ActionResult> Render(string feature, string name)
        {
            if (!string.IsNullOrEmpty(name))
                return PartialView(await Task.FromResult<string>($"~/src/{feature}/{name}.cshtml"));
            else
                return PartialView(await Task.FromResult<string>($"~/src/{feature}.cshtml"));
        }
    }
}