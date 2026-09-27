# Beget Hosting-də Ağ Səhifə Problemiminin Həlli və Deploy Tlimatı

Beget (və ya digər ənənəvi hostinqlər/cPanel) üzərində React SPA (Single Page Application) saytlarının ağ səhifə kimi açılmasının əsas səbəbləri və onların həlli bu layihədə artıq tətbiq edildi:

## 1. Niyə ağ səhifə açılır və necə həll olundu?
* **Nisbi yollar (Relative Paths):** Beget-də fayllar domen kökündə və ya alt qovluqda yerləşdikdə `/assets/...` kimi mütləq yollar 404 xətası verə bilər. `vite.config.ts` faylına `base: './'` əlavə olundu ki, bütün JS və CSS faylları həmişə düzgün nisbi yolla yüklənsin.
* **SPA Routing (`.htaccess`):** Səhifəni yenilədikdə (F5) və ya birbaşa alt keçidlərə daxil olduqda hostinq 404 verə bilər. `public/.htaccess` faylı yaradılaraq bütün sorğuların `index.html`-ə yönləndirilməsi təmin edildi.

---

## Beget Hosting-ə Saytı Necə Yükləmək Lázımdır?

1. **Layihəni kompyuterinizdə build edin:**
   Terminalda (və ya AI Studio vasitəsilə) build əmrini icra edin:
   ```bash
   npm run build
   ```
   Bu əmr layihənin kökündə **`dist`** qovluğu yaradacaq.

2. **Beget Fayl Menecerinə daxil olun:**
   * Beget idarə panelindən **Файловый менеджер** (File Manager)-ə daxil olun.
   * Domeninizin qovluğuna keçin (məsələn: `public_html` və ya domeninizin adı yazılan qovluq).

3. **Faylları Yükləyin:**
   * `dist` qovluğunun **içindəki bütün faylları** (`index.html`, `assets/`, `.htaccess` və s.) birbaşa `public_html` qovluğunun içinə yükləyin.
   * *Qeyd:* `.htaccess` faylı bəzi hallarda gizli ola bilər. Əgər görünmürsə, "Göstər / Show hidden files" parametrini aktiv edin.

Artıq saytınız Beget-də heç bir ağ səhifə problemi olmadan mükəmməl şəkildə açılacaq!
