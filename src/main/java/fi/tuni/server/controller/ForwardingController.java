package fi.tuni.server.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Custom controller to forward path to static files.
 *
 * @author Lauri Latva-Kyyny
 * @version 1.0
 */
@Controller
public class ForwardingController {
    /**
     * Forwards path to static files.
     */
    @RequestMapping("/**/{path:[^\\.]+}")
    public String forward() {
        return "forward:/";
    }
}
