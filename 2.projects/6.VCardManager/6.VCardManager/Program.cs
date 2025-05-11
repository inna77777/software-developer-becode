using _6.VCardManager.Helpers;
using _6.VCardManager.Services;


string contactFilePath = PathHelper.GetProjectRootPath("contacts.vcf");
var manager = new VCardService(contactFilePath);
manager.RunMenu();