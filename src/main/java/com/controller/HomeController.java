package com.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class HomeController {

	/**
	 * basically, no need to append ../index.html anymore, it will auto redirect to index.html without uri change required or visible.s 
	 */
	@GetMapping
	public ModelAndView redirect(ModelMap model) {
		return new ModelAndView("forward:/index.html", model);
	}
	
}